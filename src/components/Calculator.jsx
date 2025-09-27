import React, { useState } from 'react';
import { FaBackspace } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card p-4" style={{ width: '300px' }}>
        <input
          type="text"
          className="form-control mb-3 text-end"
          value={input}
          placeholder="0"
          readOnly
        />
        <div className="d-grid gap-2">
          {/* Row 1 */}
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-danger flex-fill" onClick={handleClear}>
              C
            </button>
            <button className="btn btn-warning flex-fill" onClick={handleDelete}>
              <FaBackspace />
            </button>
            <button className="btn btn-secondary flex-fill" onClick={() => handleClick('%')}>
              %
            </button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick('/')}>
              ÷
            </button>
          </div>

          {/* Row 2 */}
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-light flex-fill" onClick={() => handleClick('7')}>
              7
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('8')}>
              8
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('9')}>
              9
            </button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick('*')}>
              ×
            </button>
          </div>

          {/* Row 3 */}
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-light flex-fill" onClick={() => handleClick('4')}>
              4
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('5')}>
              5
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('6')}>
              6
            </button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick('-')}>
              -
            </button>
          </div>

          {/* Row 4 */}
          <div className="d-flex gap-2 mb-2">
            <button className="btn btn-light flex-fill" onClick={() => handleClick('1')}>
              1
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('2')}>
              2
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('3')}>
              3
            </button>
            <button className="btn btn-primary flex-fill" onClick={() => handleClick('+')}>
              +
            </button>
          </div>

          {/* Row 5 */}
          <div className="d-flex gap-2">
            <button className="btn btn-light flex-fill" onClick={() => handleClick('0')}>
              0
            </button>
            <button className="btn btn-light flex-fill" onClick={() => handleClick('.')}>
              .
            </button>
            <button className="btn btn-success flex-fill" onClick={handleCalculate}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
