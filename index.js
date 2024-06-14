function Bin2Dec(input)
{
    let output = 0;
    input = input.split("").reverse().toString().replace(/[,]/g, "");

    for (let i = 0; i < input.length; i++)
        {
            let currChar = input.charAt(i);

            if (currChar === '1')
            {
                output += Math.pow(2, i);
            }
        }

    return output;
}

let input = 0;
let submitButton = document.querySelector(".submit-button");
let outputText = document.querySelector(".binary-output");

submitButton.addEventListener("click", () => {
    input = document.querySelector(".binary-input").value;
    outputText.innerHTML = `${input} is ${Bin2Dec(input)}`;
    if (input.match(/[01]/g) !== null)
    {
        outputText.innerHTML = `${input} is ${Bin2Dec(input)}`;
    }else
    {
        outputText.innerHTML = "Invalid Input";
    }
});