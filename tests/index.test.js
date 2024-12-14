const { getCurrentFinialYear, getFinialYear } = require('../index');

test('Get current financial year', () => {
    const financialYear = getCurrentFinialYear();
    expect(financialYear).toMatch(/\d{4}-\d{4}/);
});

test('Get financial year for a specific date', () => {
    const financialYear = getFinialYear('05-07-2024');
    expect(financialYear).toBe('2024-2025');
});
