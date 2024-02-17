/*
 * SPDX-FileCopyrightText: 2010-2022 Espressif Systems (Shanghai) CO LTD
 *
 * SPDX-License-Identifier: CC0-1.0
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <inttypes.h>
#include "sdkconfig.h"
#include "freertos/FreeRTOS.h"
#include "freertos/task.h"
#include "esp_chip_info.h"
#include "esp_flash.h"
#include "esp_system.h"
#include "DALI_communication.h"
#include "DALI_addressing.h"
#include "DALI_diagnostics_and_maintenance.h"
#include "driver/gptimer.h"
#include "esp_log.h"
#include "Wifi_provisioning.h"
#include <wifi_provisioning/manager.h>
#include "Tcp_server.h"
#include "../managed_components/espressif__mdns/include/mdns.h"
#include "mDNS_handler.h"
// #include "State_manager.h"

void taskOne(void *parameter)
{
    while (true)
    {
        printf("Task one...\n");
        vTaskDelay(15000 / portTICK_PERIOD_MS);
        vTaskDelete(NULL);
    }
}

void run(void *parameter)
{
    while (true)
    {

        Controle_gear controle_gear_1 = fetch_controle_gear_data(0x00);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        Controle_gear controle_gear_2 = fetch_controle_gear_data(0x01);
        printObject(controle_gear_1);
        printObject(controle_gear_2);

        // uint8_t driversOnBus = commission_bus();
        // printf("Drivers on bus: %d\n", driversOnBus);

        printf("Turn light off...\n");
        send_DALI_Tx(0xFE00);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        printf("incrementer: %d\n", incrementer);
        printf("incrementer2: %d\n", incrementer2);
        printf("Turn light on...\n");
        send_DALI_Tx(0xFEFE);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        printf("incrementer: %d\n", incrementer);
        printf("incrementer2: %d\n", incrementer2);

        printf("Blinking lamp 0\n");
        send_DALI_Tx(0x0000);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        send_DALI_Tx(0x00FE);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        printf("Blinking lamp 1\n");
        send_DALI_Tx(0x0200);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
        send_DALI_Tx(0x02FE);
        vTaskDelay(1000 / portTICK_PERIOD_MS);
    }
}

void app_main(void)
{
    init_wifi_provisioning(); // Error handling is already handled in the init function
    init_DALI_communication();

    DALI_Status check = check_drivers_commissioned();

    if (check == DALI_OK)
    {
        printf("All drivers commissioned\n");
    }
    else if (check == DALI_ERR_NO_DRIVERS)
    {
        printf("No drivers on the bus\n");
    }
    else if (check == DALI_ERR_UNCOMMISSIONED_DRIVER)
    {
        printf("Uncommissioned driver\n");
    }
    else
    {
        printf("Unknown error: %d\n", check);
    }

    xTaskCreate(tcp_server_task, "tcp_server", 4096, NULL, 5, NULL);
    mDNS_init();
    xTaskCreatePinnedToCore(run, "task two", 2048, NULL, 2, NULL, 0);

    /* Initialize NVS partition */
}
