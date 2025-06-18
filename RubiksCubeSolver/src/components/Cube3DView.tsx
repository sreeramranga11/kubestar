import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('window');
const size = Math.min(width, 280); // Smaller size for better fit

interface Cube3DViewProps {
  selectedColor: string;
}

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>3D Rubik's Cube</title>
    <style>
      html, body { margin: 0; padding: 0; overflow: hidden; background: transparent; }
      canvas { display: block; background: transparent !important; }
    </style>
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js"></script>
    <script>
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
      renderer.setClearColor(0x000000, 0); // transparent background
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Rubik's Cube colors
      const colors = [
        0xffffff, // white
        0xffff00, // yellow
        0xff0000, // red
        0xffa500, // orange
        0x0000ff, // blue
        0x00ff00, // green
      ];

      // Create 3x3x3 mini-cubes
      const cubes = [];
      const offset = 1.05;
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const geometry = new THREE.BoxGeometry(1, 1, 1);
            // Each face gets a color (for demo, assign random color)
            const materials = [
              new THREE.MeshBasicMaterial({ color: colors[0] }), // right
              new THREE.MeshBasicMaterial({ color: colors[1] }), // left
              new THREE.MeshBasicMaterial({ color: colors[2] }), // top
              new THREE.MeshBasicMaterial({ color: colors[3] }), // bottom
              new THREE.MeshBasicMaterial({ color: colors[4] }), // front
              new THREE.MeshBasicMaterial({ color: colors[5] }), // back
            ];
            const cube = new THREE.Mesh(geometry, materials);
            cube.position.set(x * offset, y * offset, z * offset);
            scene.add(cube);
            cubes.push(cube);
          }
        }
      }

      camera.position.z = 7;

      // Simple rotation animation
      function animate() {
        requestAnimationFrame(animate);
        scene.rotation.x += 0.005;
        scene.rotation.y += 0.01;
        renderer.render(scene, camera);
      }
      animate();

      // Listen for messages from React Native
      document.addEventListener('message', function(event) {
        // Future: handle color selection and cube updates
        // const data = JSON.parse(event.data);
      });
    </script>
  </body>
</html>
`;

const Cube3DView: React.FC<Cube3DViewProps> = ({ selectedColor }) => {
  const webviewRef = useRef(null);

  // Future: use selectedColor to send to WebView for interaction

  return (
    <View style={styles.container}>
      <WebView
        ref={webviewRef}
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={{ width: size, height: size, backgroundColor: 'transparent' }}
        javaScriptEnabled
        domStorageEnabled
        scrollEnabled={false}
        containerStyle={{ backgroundColor: 'transparent' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center', margin: 16 },
});

export default Cube3DView;
