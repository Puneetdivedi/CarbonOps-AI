const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Function to recursively find files and bump the Architecture Header Version
const processDirectory = (dir) => {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else {
      const ext = path.extname(file);
      if (['.jsx', '.js', '.css'].includes(ext)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Literal edit across every file
        if (content.includes('Version: 1.0.0')) {
          const newContent = content.replace(/Version: 1\.0\.0/g, 'Version: 1.1.0 (LTS Production Launch)');
          fs.writeFileSync(fullPath, newContent);
          console.log(`Updated version stamp in ${file}`);
        }
      }
    }
  }
};

processDirectory(srcDir);
console.log('Project officially bumped to v1.1.0 across all modules.');
