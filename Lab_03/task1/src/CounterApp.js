import StepCounter from './StepCounter';

function CounterApp() {
  return (
    <div>
      <h1>Lab 3.1 - Step Counter</h1>
      {/* Props передают начальные значения, state каждого счетчика независим */}
      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default CounterApp;
