import showDescriptionBar from '../app';

describe('showDescriptionBar', () => test.each([
  ['Лучник', {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, '😠Л(1)⚔40🛡10❤50',
  ],
  ['Swordsman', {
    name: 'Swordsman',
    type: 'Swordsman',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, '😡S(1)⚔40🛡10❤50',
  ],
  ['Magician', {
    name: 'Magician',
    type: 'Magician',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, '🧐M(1)⚔40🛡10❤50',
  ],
  ['Daemon', {
    name: 'Daemon',
    type: 'Daemon',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, '👿D(1)⚔40🛡10❤50',
  ],
  ['Undead', {
    name: 'Undead',
    type: 'Undead',
    health: 50,
    level: 1,
    attack: 40,
    defence: 10,
  }, '💀U(1)⚔40🛡10❤50',
  ],
])(
  ('%s'),
  (level, amount, expected) => {
    const result = showDescriptionBar(amount);
    expect(result).toEqual(expected);
  },
));
