export type CubeColor = 'white' | 'yellow' | 'red' | 'orange' | 'blue' | 'green';

export type Face = CubeColor[][]; // 3x3 grid

export type CubeState = {
  U: Face; // Up
  D: Face; // Down
  F: Face; // Front
  B: Face; // Back
  L: Face; // Left
  R: Face; // Right
};

export type CubeMove = string; // e.g., "R", "U'", "F2"
