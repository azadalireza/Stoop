// This file is used to resolve module imports in the project
const path = require('path');
const fs = require('fs');

// Map of module names to their file paths
const moduleMap = {
  '@/components/ui/button': path.resolve(__dirname, 'components/ui/button.tsx'),
  '@/components/ui/input': path.resolve(__dirname, 'components/ui/input.tsx'),
  '@/components/ui/textarea': path.resolve(__dirname, 'components/ui/textarea.tsx'),
  '@/components/ui/card': path.resolve(__dirname, 'components/ui/card.tsx'),
  '@/lib/utils': path.resolve(__dirname, 'lib/utils.ts'),
};

// Function to check if a file exists
function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

// Verify that all mapped files exist
Object.entries(moduleMap).forEach(([moduleName, filePath]) => {
  if (!fileExists(filePath)) {
    console.warn(`Warning: Module ${moduleName} is mapped to ${filePath}, but the file does not exist.`);
  } else {
    console.log(`Module ${moduleName} successfully mapped to ${filePath}`);
  }
});

module.exports = moduleMap;
