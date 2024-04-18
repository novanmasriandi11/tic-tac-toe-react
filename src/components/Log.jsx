export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.cell}`}>
          <b>{turn.playerName.toUpperCase()}</b> selected{" "}
          <strong>
            ROW&nbsp;
            {turn.square.row}
            ,&nbsp; COLUMN&nbsp;
            {turn.square.cell}
          </strong>
        </li>
      ))}
    </ol>
  );
}
