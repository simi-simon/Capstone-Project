export function listProjects(_req, res) {
  res.json([
    { title: 'AI Governance Portal', category: 'CIVIC TECH', description: 'A concept for making public-service information easier to find through guided instructions and an AI-assisted help interface.', tags: ['React','Accessibility','Information design'] },
    { title: 'SOS Emergency Response', category: 'SMART CITY', description: 'A concept interface for raising emergency alerts and helping responders understand incident details and status.', tags: ['React','Responsive UI','Workflow design'] },
    { title: 'FPGA MAC for Edge AI', category: 'HARDWARE / AI', description: 'A research-oriented project concept exploring power-aware multiply-accumulate datapaths for edge inference.', tags: ['FPGA','Low power','Edge AI'] }
  ]);
}
