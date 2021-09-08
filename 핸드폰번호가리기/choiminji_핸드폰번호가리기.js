function solution(phone_number) {
    const DIVIDED_LENGTH = phone_number.length - 4;
    return '*'.repeat(DIVIDED_LENGTH) + phone_number.slice(DIVIDED_LENGTH);
}
