export const validateInputAsNumber = (
    event: React.FormEvent<HTMLInputElement>
    ): void => {
    const input = event.currentTarget
    // Only allow numbers
    const numericValue = input.value.replace(/[^0-9]/g, '')
    
    // Update input value to only contain numbers
    input.value = numericValue
    
    const parsedInput = parseInt(numericValue, 10)
    if (!isNaN(parsedInput)) {
    // Ensure number is within range 0-999
    if (parsedInput > 999) {
    alert('enter number between 0 - 1000')
    input.value = '0'
    } else if (parsedInput < 0) {
    input.value = '0'
    }
    }
    }