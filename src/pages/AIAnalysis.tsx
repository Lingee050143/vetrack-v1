import React, { useState } from 'react';
import AICard from '../components/AICard';
import Button from '../components/Button';
import { Camera, Upload, History, Info } from 'lucide-react';
import Card from '../components/Card';

const AIAnalysis: React.FC = () => {
  const [analysisState, setAnalysisState] = useState<'idle' | 'processing' | 'result' | 'error'>('idle');
  const [riskLevel, setRiskLevel] = useState<'safe' | 'alert'>('safe');

  const startAnalysis = () => {
    setAnalysisState('processing');
    setTimeout(() => {
      setAnalysisState('result');
      setRiskLevel(Math.random() > 0.5 ? 'safe' : 'alert');
    }, 2000);
  };

  const resetAnalysis = () => {
    setAnalysisState('idle');
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-left-4 duration-slow">
      <div className="flex flex-col gap-2">
        <h1 className="text-h1 text-neutral-900">AI Health Analysis</h1>
        <p className="text-body-md text-neutral-500">Advanced diagnostic tools for your pets.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <Card size="full" header="Upload Pet Symptoms">
            <div className="aspect-video bg-neutral-50 dark:bg-neutral-800 rounded-md border-2 border-dashed border-neutral-200 dark:border-neutral-700 flex flex-col items-center justify-center gap-4 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 transition-all cursor-pointer">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <Camera size={32} />
              </div>
              <div className="text-center">
                <p className="text-body-md font-bold text-neutral-900">Upload an image of the area/symptoms</p>
                <p className="text-caption text-neutral-500">Drag & drop or Click to browse (Supports JPG, PNG)</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-caption font-bold text-neutral-500 uppercase">Pet Information</label>
              <select className="bg-surface-base border border-neutral-300 dark:border-neutral-700 p-3 rounded-sm text-body-md focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:bg-neutral-800">
                <option>Select a Pet</option>
                <option>Toby (Dog)</option>
                <option>Luna (Cat)</option>
                <option>Simba (Golden Retriever)</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-caption font-bold text-neutral-500 uppercase">Symptoms Description</label>
              <textarea 
                placeholder="Describe current symptoms or behavior..." 
                className="bg-surface-base border border-neutral-300 dark:border-neutral-700 p-3 rounded-sm min-h-[120px] text-body-md focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:bg-neutral-800"
              />
            </div>
            
            <div className="flex gap-3 pt-4">
              <Button size="lg" className="flex-grow" onClick={startAnalysis}>Run Full AI Diagnosis</Button>
              <Button variant="secondary" size="lg"><History size={20} /></Button>
            </div>
          </Card>
          
          <div className="p-4 bg-primary-100 text-primary-500 rounded-md flex gap-4 items-start">
            <Info size={24} className="shrink-0" />
            <div className="space-y-1">
              <p className="font-bold text-body-md">AI Insights</p>
              <p className="text-body-sm opacity-90">Our AI has been trained on over 50,000 veterinary cases and maintains 94% accuracy in preliminary screenings.</p>
            </div>
          </div>
        </div>

        <div className="sticky top-8 h-fit">
          <AICard 
            state={analysisState}
            riskLevel={riskLevel}
            title={analysisState === 'result' ? (riskLevel === 'safe' ? 'Analysis Complete: Healthy' : 'Analysis Complete: Action Required') : 'Analysis Result Preview'}
            description={analysisState === 'result' ? 'Final report generated based on the uploaded data.' : 'The AI result will appear here after the analysis is complete.'}
            result={
              <div className="space-y-4">
                <div className="flex items-center justify-between text-body-sm">
                  <span>Symptom Accuracy</span>
                  <span className="font-bold">92% Match</span>
                </div>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[92%]" />
                </div>
                <div className="space-y-2">
                  <span className="text-caption font-bold uppercase block opacity-80">AI Findings</span>
                  <ul className="text-body-sm list-disc list-inside space-y-1">
                    <li>Possible localized skin irritation</li>
                    <li>No signs of parasitic infection</li>
                    <li>Normal heart rate patterns registered</li>
                  </ul>
                </div>
              </div>
            }
            recommendation={riskLevel === 'safe' ? "Regular observation is recommended. Maintain current diet." : "Schedule a vet consultation within 48 hours. Avoid strenuous activity."}
            className="shadow-2xl h-[480px]"
          />
          {analysisState === 'result' && (
            <div className="mt-4 flex gap-4">
              <Button variant="ghost" onClick={resetAnalysis} className="flex-grow">Back to New Analysis</Button>
              <Button size="md" leftIcon={<Upload size={18} />}>Export PDF Report</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
