/*
 *  Copyright (c) 2021, The OpenThread Authors.
 *  All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *  1. Redistributions of source code must retain the above copyright
 *     notice, this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright
 *     notice, this list of conditions and the following disclaimer in the
 *     documentation and/or other materials provided with the distribution.
 *  3. Neither the name of the copyright holder nor the
 *     names of its contributors may be used to endorse or promote products
 *     derived from this software without specific prior written permission.
 *
 *  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 *  AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 *  IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 *  ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 *  LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 *  CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 *  SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 *  INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 *  CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 *  ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 *  POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef POSIX_PLATFORM_RADIO_HPP_
#define POSIX_PLATFORM_RADIO_HPP_

#include "posix/platform/radio_url.hpp"

namespace ot {
namespace Posix {

/**
 * Manages Thread radio.
 *
 */
class Radio
{
public:
    /**
     * Creates the radio manager.
     *
     * @param[in]   aUrl    A pointer to the null-terminated URL.
     *
     */
    explicit Radio(const char *aUrl);

    /**
     * Initialize the Thread radio.
     *
     */
    void Init(void);

    /**
     * Acts as an accessor to the spinel instance used by the radio.
     *
     * @returns A pointer to the radio's spinel interface instance.
     *
     */
    static void *GetSpinelInstance(void);

private:
#if OPENTHREAD_POSIX_VIRTUAL_TIME
    void VirtualTimeInit(void);
#endif
    void ProcessRadioUrl(const RadioUrl &aRadioUrl);
    void ProcessMaxPowerTable(const RadioUrl &aRadioUrl);

    RadioUrl mRadioUrl;
};

} // namespace Posix
} // namespace ot

#endif // POSIX_PLATFORM_RADIO_HPP_
