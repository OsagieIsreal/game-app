import React, { useRef } from 'react';


const MultiInput: React.FC = () => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    // Allow only numeric input
    if (!/^\d*$/.test(value)) {
      event.preventDefault();
      return;
    }

    // Update input value
    event.target.value = value.slice(0, 3); // Limit to 3 digits

    // Move to the next input if 3 digits are entered
    if (value.length === 3 && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div>
      {Array.from({ length: 5 }).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={3}
          ref={(el) => (inputsRef.current[index] = el)}
          onChange={(e) => handleInputChange(index, e)}
          style={{ marginRight: '10px', width: '50px', textAlign: 'center' }}
          onInput={validateInputAsNumber}
        />
      ))}
    </div>
  );
};

const validateInputAsNumber = (
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

export default MultiInput;
