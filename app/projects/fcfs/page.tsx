"use client"; // Required for interactive state logic

import React, { useState } from 'react';
import RetroBox from '@/components/RetroBox';

interface Process {
  id: number;
  arrivalTime: number;
  burstTime: number;
}

export default function FCFSPage() {
  const [processes, setProcesses] = useState<Process[]>([
    { id: 1, arrivalTime: 0, burstTime: 5 },
    { id: 2, arrivalTime: 2, burstTime: 3 },
  ]);

  // Logic to add a new process
  const addProcess = () => {
    const newId = processes.length + 1;
    setProcesses([...processes, { id: newId, arrivalTime: 0, burstTime: 1 }]);
  };

  // Logic to calculate the Timeline (Gantt Chart data)
  const calculateGantt = () => {
    let currentTime = 0;
    return processes
      .sort((a, b) => a.arrivalTime - b.arrivalTime)
      .map((p) => {
        const start = Math.max(currentTime, p.arrivalTime);
        const end = start + p.burstTime;
        currentTime = end;
        return { ...p, start, end };
      });
  };

  const ganttChart = calculateGantt();

  return (
    <section className="py-12">
      <h2 className="text-4xl font-extrabold mb-8 uppercase">FCFS Scheduler Simulator</h2>
      
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="font-bold text-xl uppercase tracking-wider">Input Processes</h3>
          {processes.map((p, index) => (
            <RetroBox key={p.id} className="bg-gray-50 flex items-center space-x-4">
              <span className="font-bold">P{p.id}</span>
              <div className="flex flex-col">
                <label className="text-xs uppercase font-bold">Arrival</label>
                <input 
                  type="number" 
                  className="w-16 border-2 border-gray-900 p-1"
                  value={p.arrivalTime}
                  onChange={(e) => {
                    const newArr = [...processes];
                    newArr[index].arrivalTime = parseInt(e.target.value) || 0;
                    setProcesses(newArr);
                  }}
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs uppercase font-bold">Burst</label>
                <input 
                  type="number" 
                  className="w-16 border-2 border-gray-900 p-1"
                  value={p.burstTime}
                  onChange={(e) => {
                    const newArr = [...processes];
                    newArr[index].burstTime = parseInt(e.target.value) || 0;
                    setProcesses(newArr);
                  }}
                />
              </div>
            </RetroBox>
          ))}
          <button 
            onClick={addProcess}
            className="w-full"
          >
            <RetroBox className="bg-gray-900 text-white py-2 font-bold uppercase hover:bg-black border-0">
              + Add Process
            </RetroBox>
          </button>
        </div>

        {/* Visualizer Section */}
        <div className="lg:col-span-2 space-y-8">
          <h3 className="font-bold text-xl uppercase tracking-wider">Gantt Chart Visualization</h3>
          
          <div className="overflow-x-auto pb-4">
            <div className="flex items-end">
              {ganttChart.map((p) => (
                <div key={p.id} className="flex flex-col items-center">
                  <div 
                    className="border-4 border-gray-900 bg-white flex items-center justify-center font-bold"
                    style={{ width: `${p.burstTime * 40}px`, height: '60px' }}
                  >
                    P{p.id}
                  </div>
                  <div className="flex w-full justify-between text-xs font-bold mt-1">
                    <span>{p.start}</span>
                    <span>{p.end}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RetroBox className="bg-white">
            <h4 className="font-bold mb-4 uppercase">Calculations</h4>
            <div className="text-sm space-y-2">
              <p>Average Waiting Time: <span className="font-bold underline">Calculated per run</span></p>
              <p>Average Turnaround Time: <span className="font-bold underline">Calculated per run</span></p>
            </div>
          </RetroBox>
        </div>
      </div>
    </section>
  );
}