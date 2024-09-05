import CarController from './validador.js';

describe('CarController', () => {
  it("devolver el comando dado", () => {
    expect(CarController('5,5/1,2N/IAIAIAIAA')).toBe('5,5/1,2N/IAIAIAIAA');
  });
});
