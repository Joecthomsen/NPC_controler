# The following lines of boilerplate have to be in your project's
# CMakeLists in this exact order for cmake to work correctly
cmake_minimum_required(VERSION 3.16)

include($ENV{IDF_PATH}/tools/cmake/project.cmake)
#message("Including custom components")
#add_subdirectory("/home/johannes/Desktop/Afslutnings_projekt/contoler/main/custom_components")
include_directories("/home/johannes/Desktop/Afslutnings_projekt/contoler/components/device")
include_directories("/home/johannes/Desktop/Afslutnings_projekt/contoler/components/")
project(contoler)
