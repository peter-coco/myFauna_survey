export const setResultOnSurvey = (characterPoint: number): string => {
  if (9 >= characterPoint && characterPoint >= 8) return 'raccon';
  else if (8 > characterPoint && characterPoint >= 6) return 'fox';
  else if (6 > characterPoint && characterPoint >= 4) return 'dog';
  else if (4 > characterPoint && characterPoint >= 2) return 'bear';
  else if (2 > characterPoint && characterPoint >= -1) return 'cow';
  else if (-1 > characterPoint && characterPoint >= -3) return 'hamster';
  else if (-3 > characterPoint && characterPoint >= -5) return 'rabbit';
  else if (-5 > characterPoint && characterPoint >= -7) return 'cat';
  else return 'hedgehog';
};
