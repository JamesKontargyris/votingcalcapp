#!/bin/bash
# Manually emulate ionic/cordova application
# Miroslav Masat 2014

#"com.apple.CoreSimulator.SimDeviceType.iPhone-4s, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPhone-5, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPhone-5s, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPhone-6-Plus, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPhone-6, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPad-2, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPad-Retina, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.iPad-Air, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.Resizable-iPhone, 8.1"
#"com.apple.CoreSimulator.SimDeviceType.Resizable-iPad, 8.1"

echo "Emulating..."
cd ./platforms/ios/build/emulator
var=$(pwd)
 
ios-sim launch "$var"/*.app --devicetypeid "com.apple.CoreSimulator.SimDeviceType.iPhone-4s, 8.1"