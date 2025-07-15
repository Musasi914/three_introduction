float remap(
  float value, // 再マップしたい値
  float originMin,  // 別の範囲に変換する部分
  float originMax, 
  float destinationMin, // 宛先範囲の開始と終了
  float destinationMax
) {
  return clamp(0.0, 1.0, destinationMin + (value - originMin) * (destinationMax - destinationMin) / (originMax - originMin));
}

// float explodingProgress = remap(uProgress, 0.0, 0.1, 0.0, 1.0);