import React from 'react'
import { useState } from 'react';

const BikeForm2 = () => {
    const initialConditions = {
        ScratchOnPanel: false,
        MudguardBroken: false,
        FuelTankDamaged: false,
        BrokenHeadlights: false,
        TailLightBroken: false,
        IndicatorsBroken: false,
        RearMirrorsBroken: false,
        VisorBroken: false,
        SeatDamaged: false,
        FootPegsDamaged: false,
        StandIssue: false,

        SpeedometerDamaged: false,
        HeadlightsNotWorking: false,
        TailLightsNotWorking: false,
        IndicatorsNotWorking: false,
        BatteryFaulty: false,
        EngineIssue: false,
        DamagedTyres: false,
        BrakesWornOut: false,
        KillSwitchIgnitionNotWorking: false,
        ChainRusted: false,
        ExhaustScratchedDamaged: false,
        SuspensionFaulty: false,
        GearBoxIssue: false,
        WheelAlignmentIssue: false,
        RadiatorIssue: false
    };

    const [conditions, setConditions] = useState(initialConditions);

    const handleOptionClick = (option) => {
        setConditions({
            ...conditions,
            [option]: !conditions[option],
        });
    };

    return (
        <div className='flex flex-col'>
            <div className='flex flex-row space-x-6 p-3'>

                <div className='rounded-full w-[130px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Basic Details</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-red-500'></div>
                    <div className='text-sm'>Condition Details</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-black'></div>
                    <div className='text-sm'>Photos</div>
                </div>

                <div className='rounded-full w-[150px] h-[40px] bg-gray-300 flex flex-row items-center justify-center space-x-2'>
                    <div className='w-[20px] h-[20px] rounded-full bg-black'></div>
                    <div className='text-sm'>Expected Price</div>
                </div>

            </div>

            <div className='flex flex-col mx-6'>
                <div className='flex flex-col w-full'>
                    <div className='text-center font-bold text-lg'>Condition Details</div>

                    <div className='w-full'><hr /></div>

                    <div className='text-sm'>Select Body Defects if any</div>

                    <div className='flex flex-row flex-wrap mx-auto'>
                        <div
                            key="ScratchOnPanel"
                            className={`m-3 w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["ScratchOnPanel"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("ScratchOnPanel")}
                        >
                            Scratch on Panel
                        </div>

                        <div
                            key="MudguardBroken"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["MudguardBroken"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("MudguardBroken")}
                        >
                            Mudguard Broken
                        </div>

                        <div
                            key="FuelTankDamaged"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["FuelTankDamaged"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("FuelTankDamaged")}
                        >
                            Fuel Tank Damaged
                        </div>

                        <div
                            key="BrokenHeadlights"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["BrokenHeadlights"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("BrokenHeadlights")}
                        >
                            Broken Headlights
                        </div>

                        <div
                            key="TailLightBroken"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["TailLightBroken"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("TailLightBroken")}
                        >
                            TailLight Broken
                        </div>

                        <div
                            key="IndicatorsBroken"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["IndicatorsBroken"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("IndicatorsBroken")}
                        >
                            Indicators Broken
                        </div>

                        <div
                            key="RearMirrorsBroken"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["RearMirrorsBroken"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("RearMirrorsBroken")}
                        >
                            Rear Mirrors Broken
                        </div>

                        <div
                            key="VisorBroken"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["VisorBroken"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("VisorBroken")}
                        >
                            Visor Broken
                        </div>

                        <div
                            key="FootPegsDamaged"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["FootPegsDamaged"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("FootPegsDamaged")}
                        >
                            FootPegs Damaged
                        </div>

                        <div
                            key="StandIssue"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["StandIssue"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("StandIssue")}
                        >
                            Stand Issue
                        </div>

                    </div>

                    <div className='text-sm'>Functional / Physical Problems</div>

                    <div className='flex flex-row flex-wrap mx-auto'>

                        <div
                            key="SpeedometerDamaged"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["SpeedometerDamaged"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("SpeedometerDamaged")}
                        >
                            Speedometer Damaged
                        </div>

                        <div
                            key="HeadlightsNotWorking"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["HeadlightsNotWorking"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("HeadlightsNotWorking")}
                        >
                            Headlights Not Working
                        </div>

                        <div
                            key="TailLightsNotWorking"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["TailLightsNotWorking"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("TailLightsNotWorking")}
                        >
                            TailLights Not Working
                        </div>

                        <div
                            key="IndicatorsNotWorking"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["IndicatorsNotWorking"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("IndicatorsNotWorking")}
                        >
                            Indicators Not Working
                        </div>

                        <div
                            key="BatteryFaulty"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["BatteryFaulty"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("BatteryFaulty")}
                        >
                            Battery Faulty
                        </div>

                        <div
                            key="EngineIssue"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["EngineIssue"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("EngineIssue")}
                        >
                            Engine Issue
                        </div>

                        <div
                            key="DamagedTyres"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["DamagedTyres"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("DamagedTyres")}
                        >
                            Damaged Tyres
                        </div>

                        <div
                            key="BrakesWornOut"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["BrakesWornOut"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("BrakesWornOut")}
                        >
                            Brakes Worn Out
                        </div>

                        <div
                            key="KillSwitchIgnitionNotWorking"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["KillSwitchIgnitionNotWorking"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("KillSwitchIgnitionNotWorking")}
                        >
                            KillSwitch/Ignition Not Working
                        </div>

                        <div
                            key="ChainRusted"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["ChainRusted"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("ChainRusted")}
                        >
                            Chain Rusted
                        </div>

                        <div
                            key="ExhaustScratchedDamaged"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["ExhaustScratchedDamaged"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("ExhaustScratchedDamaged")}
                        >
                            Exhaust Scratched/Damaged
                        </div>

                        <div
                            key="SuspensionFaulty"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["SuspensionFaulty"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("SuspensionFaulty")}
                        >
                            Suspension Faulty
                        </div>

                        <div
                            key="GearBoxIssue"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["GearBoxIssue"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("GearBoxIssue")}
                        >
                            GearBox Issue
                        </div>

                        <div
                            key="WheelAlignmentIssue"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["WheelAlignmentIssue"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("WheelAlignmentIssue")}
                        >
                            Wheel Alignment Issue
                        </div>

                        <div
                            key="RadiatorIssue"
                            className={`m-3  w-[150px] h-[150px] flex items-center justify-center text-sm p-2 cursor-pointer border shadow-md rounded-lg ${conditions["RadiatorIssue"] ? 'bg-blue-500 text-white' : 'bg-gray-300'
                                }`}
                            onClick={() => handleOptionClick("RadiatorIssue")}
                        >
                            Radiator Issue
                        </div>

                    </div>

                </div>
            </div>

            <button className='w-[200px] h-[50px] bg-red-500 border-[1px] m-4 border-white text-center rounded-lg p-2 text-white'>
                Save
            </button>
        </div>
    )
}

export default BikeForm2