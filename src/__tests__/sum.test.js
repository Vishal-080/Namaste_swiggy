import sum from "../Components/sum"

test("Calculates the sum of two numbers", ()=> {
    const result = sum(3,5);

    expect(result).toBe(8);

})