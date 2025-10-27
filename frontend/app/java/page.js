import YouTubeShorts from '../../components/YouTubeShorts';
import Flag from '../../components/Flag';
import '../ReasonButtons.css';

export default function JavaPage() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Java Edition: Creative Mode</h2>
      <br></br>
      <p><i><b>Coming in the future...</b></i></p>
      <br></br>
      <p>Region: <b>US East <Flag.US /></b></p>
      <br></br>
      <p>Planned to be based on my old city map: </p>
      <br></br>
      <YouTubeShorts />
      
    </main>
  );
}
