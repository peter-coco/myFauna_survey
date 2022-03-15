export const setResultOnSurvey = (characterPoint: number): string => {
  if (17 >= characterPoint && characterPoint >= 15) return 'raccon';
  else if (15 > characterPoint && characterPoint >= 11) return 'fox';
  else if (11 > characterPoint && characterPoint >= 7) return 'dog';
  else if (7 > characterPoint && characterPoint >= 3) return 'bear';
  else if (3 > characterPoint && characterPoint >= -1) return 'cow';
  else if (-1 > characterPoint && characterPoint >= -5) return 'hamster';
  else if (-5 > characterPoint && characterPoint >= -9) return 'rabbit';
  else if (-9 > characterPoint && characterPoint >= -13) return 'cat';
  else return 'hedgehog';
};
