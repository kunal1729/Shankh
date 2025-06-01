import React, { useRef, useState } from 'react'
import { useAppContext } from '../../context/appContext'
import SpiderChart from '../../SpiderChart';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

const Results = () => {

  const {userDetails, transcript, selectedTest} =  useAppContext();

  console.log("Transcript : " ,transcript)

  const page1Ref = useRef();
  const page2Ref = useRef();

  const handleDownload = async () => {
    const input1 = page1Ref.current;
    const input2 = page2Ref.current;
    if (!input1 || !input2) return;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const canvas1 = await html2canvas(input1, { scale: 2, useCORS: true });
    const imgData1 = canvas1.toDataURL('image/png');
    const imgHeight1 = (canvas1.height * pdfWidth) / canvas1.width;
    pdf.addImage(imgData1, 'PNG', 0, 0, pdfWidth, imgHeight1);

    const canvas2 = await html2canvas(input2, { scale: 2, useCORS: true });
    const imgData2 = canvas2.toDataURL('image/png');
    const imgHeight2 = (canvas2.height * pdfWidth) / canvas2.width;

    pdf.addPage();
    pdf.addImage(imgData2, 'PNG', 0, 0, pdfWidth, imgHeight2);

    pdf.save('assessment-report.pdf');
  };
  
  

  console.log(selectedTest);

  return (
    <div className='pl-[20px] space-y-4 h-[88svh] overflow-y-scroll w-[calc(100vw-305px)] bg-[#F8FAFA] pr-[20px] pt-[32px] pb-[20px]'>
        <div ref = {page1Ref} className='flex flex-col space-y-4'>
            <div className='bg-white space-y-2 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <div className='flex justify-between items-center'>
                    <div className='leading-8'>
                        <h1 style={{fontFamily : "Poppins"}} className='text-[32px] font-semibold'>Assessment Result</h1>
                        <span style={{fontFamily : "Inter"}} className='text-[14px] text-[#5F6C7B]'>Test ID : {selectedTest._id} | {selectedTest.date}</span>
                    </div>
                    <button onClick={handleDownload} style={{fontFamily : "Poppins"}} className='flex space-x-2 pb-[10px] rounded-lg pl-[16px] pt-[10px] pr-[16px] bg-[#34856C] text-white '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                        <span>Download Report</span>
                    </button>
                </div>
                <table style={{fontFamily : "Inter"}} class="w-full text-[14px]">
                    <thead>
                        <tr className=' text-[#5F6C7B] w-full  '>
                            <th className=' text-start font-medium'>Full Name</th>
                            <th className=' text-start font-medium'>Organization</th>
                            <th className=' text-start font-medium'>Age & Gender</th>
                            <th className=' text-start font-medium'>Location</th>
                            <th className=' text-start font-medium'>Language</th>
                            <th className=' text-start font-medium'>Occupation</th>
                        </tr>
                    </thead>
                    <tbody>
                            <tr className='pt-2 border-gray-300 text-center  w-full '>
                                <td className='text-start '>{userDetails.userName}</td>
                                <td className='text-start '>{userDetails.orgName}</td>
                                <td className='text-start '>Age</td>
                                <td className='text-start '>{userDetails.location || "-"}</td>
                                <td className='text-start '>{selectedTest.language || "-"}</td>
                                <td className='text-start '>{userDetails.occupation || "-"}</td>
                            </tr>
                    </tbody>
                </table>
            </div>
            <div className='bg-white space-y-8 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <div className='flex justify-between'>
                    <div className='flex items-center space-x-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                        <span style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Overall Result</span>
                    </div>
                    <span style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Shankh Score : <span className='text-[#F9A826]'>{Math.ceil(selectedTest.overallScore)}%</span></span>
                </div>
                <div className='relative'>
                    <svg 
                    className='absolute  top-[-25px] transform -translate-x-1/2'
                    style={{ left: `${selectedTest.overallScore}%` }} 
                    width="36" 
                    height="36" 
                    viewBox="0 0 24 24" 
                    fill="black" 
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <polygon points="12,16 4,8 20,8" />
                    </svg>
                    <div className='h-[31px] flex'>
                        <div className='w-[39%] rounded-l-lg h-[31px] bg-[#FF6B5B]'></div>
                        <div className='w-[30%] h-[31px] bg-[#F9A826]'></div>
                        <div className='w-[31%] rounded-r-lg  h-[31px] bg-[#34856C]'></div>
                    </div>
                    <div style={{fontFamily : "Inter"}} className='justify-between text-[14px] text-[#5F6C7B] flex'>
                        <span>Novice</span>
                        <span>Emerging</span>
                        <span>Proficient</span>
                    </div>
                </div>
                <div style={{fontFamily : "Inter"}} className='items-center text-center text-[14px] p-[5px] justify-center space-x-[140px] flex'>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-[15px] bg-[#FF6B5B] h-[13px]'></div>
                        <span>Novice(0-39%)</span>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-[15px] bg-[#F9A826] h-[13px]'></div>
                        <span>Emerging(40-69%)</span>
                    </div>
                    <div className='flex space-x-2 items-center'>
                        <div className='w-[15px] bg-[#34856C] h-[13px]'></div>
                        <span>Proficient(70-100%)</span>
                    </div>
                </div>
            </div>
            <div className='bg-white space-y-2 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Performance across Key Parameters</h1>
                <div style={{fontFamily : "Inter"}} className='flex gap-4 text-[18px]'>
                    <div  className='shadow-lg rounded-lg p-[20px] w-1/2'>
                        <h3 className='font-semibold'>Voice Insights :<span className='font-medium'> The Mechanics of Impactful Speech</span></h3>
                        <SpiderChart testData={selectedTest.voiceInsights}/>
                    </div>
                    <div className='shadow-lg rounded-lg p-[20px] w-1/2'>
                        <h3 className='font-semibold'>Behavior Insights :<span className='font-medium'> The Psychology of your voice</span></h3>
                        <SpiderChart testData={selectedTest.behaviorInsights}/>
                    </div>
                </div>
            </div>
            <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <h1  className='text-[24px] font-semibold'>Detailed Voice Insights</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Fluency</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.voiceInsights.fluency <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.voiceInsights.fluency <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.voiceInsights.fluency <= 39
                                ? "Novice"
                                : selectedTest.voiceInsights.fluency <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.voiceInsights.fluency)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.voiceInsights.fluency}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.voiceInsights.fluency <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.voiceInsights.fluency <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Clarity</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.voiceInsights.clarity <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.voiceInsights.clarity <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.voiceInsights.clarity <= 39
                                ? "Novice"
                                : selectedTest.voiceInsights.clarity <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.voiceInsights.clarity)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.voiceInsights.clarity}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.voiceInsights.clarity <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.voiceInsights.clarity <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Tone Modulation</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.voiceInsights.toneModulation <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.voiceInsights.toneModulation <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.voiceInsights.toneModulation <= 39
                                ? "Novice"
                                : selectedTest.voiceInsights.toneModulation <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.voiceInsights.toneModulation)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.voiceInsights.toneModulation}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.voiceInsights.toneModulation <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.voiceInsights.toneModulation <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Filler Words</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.voiceInsights.fillerWords <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.voiceInsights.fillerWords <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.voiceInsights.fillerWords <= 39
                                ? "Novice"
                                : selectedTest.voiceInsights.fillerWords <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.voiceInsights.fillerWords)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.voiceInsights.fillerWords}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.voiceInsights.fillerWords <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.voiceInsights.fillerWords <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{fontFamily : "Poppins"}} className='bg-white brightness-100 space-y-8 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <h1 className='text-[24px] font-semibold'>Detailed Behavior Insights</h1>
                <div className='grid grid-cols-2 gap-4'>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Emotional Regulation</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.behaviorInsights.emotionalRegulation <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.behaviorInsights.emotionalRegulation <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.behaviorInsights.emotionalRegulation <= 39
                                ? "Novice"
                                : selectedTest.behaviorInsights.emotionalRegulation <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.behaviorInsights.emotionalRegulation)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.behaviorInsights.emotionalRegulation}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.behaviorInsights.emotionalRegulation <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.behaviorInsights.emotionalRegulation <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Confidence & Presence</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.behaviorInsights.confidenceAndPresence <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.behaviorInsights.confidenceAndPresence <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.behaviorInsights.confidenceAndPresence <= 39
                                ? "Novice"
                                : selectedTest.behaviorInsights.confidenceAndPresence <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.behaviorInsights.confidenceAndPresence)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.behaviorInsights.confidenceAndPresence}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.behaviorInsights.confidenceAndPresence <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.behaviorInsights.confidenceAndPresence <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Pacing And Pauses</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.behaviorInsights.pacingAndPauses <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.behaviorInsights.pacingAndPauses <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.behaviorInsights.pacingAndPauses <= 39
                                ? "Novice"
                                : selectedTest.behaviorInsights.pacingAndPauses <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.behaviorInsights.pacingAndPauses)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.behaviorInsights.pacingAndPauses}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.behaviorInsights.pacingAndPauses <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.behaviorInsights.pacingAndPauses <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-xl rounded-lg pr-[25px] pb-[10px] pl-[25px] pt-[10px] '>
                        <div className='flex justify-between'>
                            <div className='flex justify-between'>
                                <span className='font-semibold text-[#5F6C7B] text-[16px]'>Engagement</span>
                                <span className='items-top text-center text-white rounded-full bg-[#5F6C7B] w-[12px] text-[10px] h-[12px]'>i</span>
                            </div>
                            <span className={`text-[16px] font-semibold ${selectedTest.behaviorInsights.engagement <= 39
                                ? "text-[#FF6B5B]"
                                : selectedTest.behaviorInsights.engagement <= 69
                                ? "text-[#F9A826]"
                                : "text-[#34856C]"}`}
                            >{selectedTest.behaviorInsights.engagement <= 39
                                ? "Novice"
                                : selectedTest.behaviorInsights.engagement <= 69
                                ? "Emerging"
                                : "Proficient"}</span>
                        </div>
                        <div>
                            <span className="text-[24px] font-semibold">{Math.ceil(selectedTest.behaviorInsights.engagement)}%</span>
                            <div className="flex h-[10px] w-full rounded-l-full rounded-r-full bg-[#D9E0E6]">
                                <div
                                style={{ width: `${selectedTest.behaviorInsights.engagement}%` }}
                                className={`h-[10px] rounded-l-full rounded-r-full ${selectedTest.behaviorInsights.engagement <= 39
                                    ? "bg-[#FF6B5B]"
                                    : selectedTest.behaviorInsights.engagement <= 69
                                    ? "bg-[#F9A826]"
                                    : "bg-[#34856C]"}`}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref = {page2Ref} className='flex flex-col space-y-4'>
            <div className='bg-white brightness-100 space-y-8 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <div>
                    <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Filler Word Analysis</h1>
                </div>
                <p style={{fontFamily : "Inter"}} className='text-center text-[14px]'>The usage of filler words is on the higher side, contributed primarily by "um", "like", "uh", and "you know". Training with impromptu speaking drills and using deliberate pauses instead of fillers can significantly improve your delivery.</p>
                <div  className='flex justify-center gap-4'>
                    {Object.keys(selectedTest.fillerWordsUsed).map(key => {
                        console.log(selectedTest.fillerWordsUsed[key])
                        return (
                            <div className='flex rounded-2xl w-[135px] h-[114px] bg-white drop-shadow-lg pl-[16px] pb-[10px] pr-[16px] pt-[10px] shadow-xl flex-col items-center' key = {key}>
                                <span style={{fontFamily : "Poppins"}} className='text-[#FF6B5B] font-semibold text-[32px]'>{selectedTest.fillerWordsUsed[key]}</span>
                                <span style={{fontFamily : "Inter"}} className='text-[18px]'>"{key}"</span>
                            </div>
                        )
                    })}
                </div>
                <div style={{fontFamily : "Poppins"}} className='flex gap-12 text-center justify-center items-center bg-[#FFFBF5] pr-[80px] pb-[19px] pl-[80px] pt-[19px]'>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#34856C] rounded-xl drop-shadow-lg'>um</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#F9A826] rounded-xl drop-shadow-lg'>like</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#FF6B5B] rounded-xl drop-shadow-lg'>you know</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#34856C] rounded-xl drop-shadow-lg'>basically</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#34856C] rounded-xl drop-shadow-lg'>uhh</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#F9A826] rounded-xl drop-shadow-lg'>um</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#34856C] rounded-xl drop-shadow-lg'>like</div>
                    <div className='text-[20px] bg-white p-2 font-semibold text-[#FF6B5B] rounded-xl drop-shadow-lg'>uh</div>
                </div>
            </div>
            <div className='bg-white brightness-100 space-y-8 rounded-lg shadow-lg w-full pl-[24px] pt-[16px] pr-[24px] pb-[16px]'>
                <div>
                    <h1 style={{fontFamily : "Poppins"}} className='text-[24px] font-semibold'>Transcript</h1>
                </div>
                <p style={{fontFamily : "Inter"}} className='text-[16px] text-[#5F6C7B]'>
                {selectedTest.transcript}
                </p>
            </div>
        </div>
    </div>
    
  )
}

export default Results
