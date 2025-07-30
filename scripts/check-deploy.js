#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración para despliegue en Render...\n');

// Verificar archivos necesarios
const requiredFiles = [
  'package.json',
  'next.config.js',
  'render.yaml',
  'src/app/layout.tsx',
  'src/app/page.tsx'
];

let allGood = true;

requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - OK`);
  } else {
    console.log(`❌ ${file} - FALTANTE`);
    allGood = false;
  }
});

// Verificar scripts en package.json
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const requiredScripts = ['build', 'start'];
  
  requiredScripts.forEach(script => {
    if (packageJson.scripts && packageJson.scripts[script]) {
      console.log(`✅ Script ${script} - OK`);
    } else {
      console.log(`❌ Script ${script} - FALTANTE`);
      allGood = false;
    }
  });
} catch (error) {
  console.log('❌ Error leyendo package.json');
  allGood = false;
}

// Verificar dependencias críticas
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  const criticalDeps = ['next', 'react', 'react-dom'];
  
  criticalDeps.forEach(dep => {
    if (packageJson.dependencies && packageJson.dependencies[dep]) {
      console.log(`✅ Dependencia ${dep} - OK`);
    } else {
      console.log(`❌ Dependencia ${dep} - FALTANTE`);
      allGood = false;
    }
  });
} catch (error) {
  console.log('❌ Error verificando dependencias');
  allGood = false;
}

console.log('\n📋 Resumen:');
if (allGood) {
  console.log('🎉 ¡Todo está listo para desplegar en Render!');
  console.log('\n📝 Próximos pasos:');
  console.log('1. Haz commit y push de todos los cambios a GitHub');
  console.log('2. Ve a render.com y conecta tu repositorio');
  console.log('3. Selecciona "Web Service"');
  console.log('4. Configura el nombre del servicio');
  console.log('5. Haz clic en "Create Web Service"');
} else {
  console.log('⚠️  Hay problemas que necesitan ser corregidos antes del despliegue');
}

console.log('\n📚 Para más información, consulta DEPLOYMENT.md'); 