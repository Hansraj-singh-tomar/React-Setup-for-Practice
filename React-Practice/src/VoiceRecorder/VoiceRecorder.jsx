import React, { useRef, useState } from "react";

const VoiceRecorder = () => {
  const audioChunk = useRef([]);
  const [recordings, setRecordings] = useState([]);

  const mediaRecorderRef = useRef(null);

  const [streamRecording, setStreamRecording] = useState(false);

  const startRec = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

    const mediaRecorder = new MediaRecorder(stream);

    mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        // save the data
        audioChunk.current.push(e.data);
      }
    };

    mediaRecorder.onstop = () => {
      // jo abhi audio stream aaya usse ham iss audioChunk variable me store kar lete hai.
      // ab audio hai vo ek raw file hai to usse hame change karna padega mp3 and something else format for that we are creating this blob variable
      const audioBlob = new Blob(audioChunk.current, { type: "audio/wav" });

      // now we can change it into an url, for that we will have to do like this
      const audioURL = URL.createObjectURL(audioBlob);
      // now we can store this url into an any variable for that we will create an variable and then store it their.
      setRecordings((prevRec) => [...prevRec, audioURL]);
    };

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setStreamRecording(true);
  };

  const stopRec = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
      setStreamRecording(false);
    }
  };

  return (
    <div>
      <h1>Best Sound Recorder</h1>
      {!streamRecording ? (
        <button onClick={startRec}>Start Recording</button>
      ) : (
        <button onClick={stopRec}>Stop Recording</button>
      )}
      {recordings.map((recUrl, index) => {
        return (
          <div key={index}>
            <audio controls src={recUrl} />
            <button>
              <a href={recUrl} download>
                Download Recording
              </a>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default VoiceRecorder;
