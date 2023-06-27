import React, { useState } from 'react'
import Requirement from './Requirement';
import { InputGroup, Form, Button } from 'react-bootstrap';
export default function HomePage() {
    const [url, setUrl] = useState();
    const [shortId, setShortId] = useState('');
    const [error, setError] = useState('');
    const [analysis, setAnalysis] = useState('');
    const handleAnalysis = async () => {
        console.log(shortId)
        try {
            const response = await fetch(`http://localhost:8001/url/analytics/${shortId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                setAnalysis(data.totalClicks);
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error);
                setAnalysis('');
            }

        } catch (error) {
            setError('No visits up till now.');
            setAnalysis('');
        }
    }
    const handleGenerateShortURL = async () => {
        console.log(JSON.stringify({ url }))
        try {
            const response = await fetch('http://127.0.0.1:8001/url', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url }),
            });

            if (response.ok) {
                const data = await response.json();
                setShortId(data.id);
                setError('');
            } else {
                const errorData = await response.json();
                setError(errorData.error);
                setShortId('');

            }
        } catch (error) {
            setError('An error occurred while generating the short URL.');
            setShortId('');

        }
    };
    return (
        <div>
            <div className="home-page mt-3">
                <h1><i>URL Shortening Service...</i></h1>
                <h3 className='mt-2'>Enter your URL below to shorten it</h3>
                <InputGroup className="mb-3 mt-3">
                    <Form.Control
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter your URL "
                        aria-label="URL"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" onClick={handleGenerateShortURL} id="button-addon2">
                        Shorten
                    </Button>
                    <Button variant="outline-secondary" onClick={handleAnalysis} id="button-addon2">
                        Analysis
                    </Button>
                </InputGroup>
                <div>

                    {shortId && <p className='info'>"http://localhost:8001/url/{shortId}"</p>}
                    {analysis && <p className='info'> Number of people visited this link are {analysis}</p>}
                    {error && <p>Error: {error}</p>}
                </div>
                <Requirement />
            </div>
        </div>
    )
}
