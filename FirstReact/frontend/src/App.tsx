import './App.css';
import teams from './CollegeBasketballTeams.json';

const teamNames = teams.teams;

function Welcome() {
  return <h1>March Madness Mon!</h1>;
}

function Team({
  school,
  name,
  city,
  state,
}: {
  school: string;
  name: string;
  city: string;
  state: string;
}) {
  return (
    <>
      <img />
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>
        Location: {city}, {state}
      </h3>
    </>
  );
}

function TeamList() {
  return (
    <>
      {teamNames.map((singleTeam) => (
        <Team {...singleTeam} />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <TeamList />
    </>
  );
}

export default App;
