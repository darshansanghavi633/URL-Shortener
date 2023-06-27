import React from 'react';
import { ListGroup } from 'react-bootstrap';

export default function Requirement() {
    return (
        <React.Fragment>
            <div className='mt-3'>
                <div className='need-info mb-1'>
                    URL shortening services provide shortened versions of long and complex URLs. Here are some reasons why they are commonly used:
                </div>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item variant="secondary" as="li">Improved readability: Long URLs with numerous parameters and tracking codes can be cumbersome and difficult to read or remember. Shortened URLs are more concise and user-friendly, making them easier to share verbally or in written form.</ListGroup.Item>
                    <ListGroup.Item variant="secondary" as="li">Social media limitations: Some social media platforms have character limits for posts or tweets. URL shortening allows users to fit long URLs within these constraints and leave more room for additional content.</ListGroup.Item>
                    <ListGroup.Item variant="secondary" as="li">Tracking and analytics: URL shortening services often offer built-in analytics tools that track click-through rates, geographic location of visitors, and other relevant metrics. This information can be valuable for marketing campaigns, affiliate links, or monitoring the popularity of shared content.</ListGroup.Item>
                    <ListGroup.Item variant="secondary" as="li">Reducing errors: Long URLs are prone to typos or truncation when manually entered or copied. A shortened URL reduces the likelihood of errors and ensures that users are directed to the intended web page.</ListGroup.Item>
                    <ListGroup.Item variant="secondary" as="li">Aesthetic appeal: Shortened URLs are visually cleaner and take up less space in written materials or on websites. They can be customized to include relevant keywords or branded slugs for branding purposes.</ListGroup.Item>
                    <ListGroup.Item variant="secondary" as="li">URL masking and privacy: Some URL shortening services offer options to mask the original URL, making it harder for users to determine the destination website. This can be useful for affiliate marketing or when sharing sensitive information that you prefer to keep hidden.</ListGroup.Item>
                </ListGroup>
                <div className='need-info mt-1'>
                    Overall, URL shortening services provide convenience, readability, and tracking capabilities that make them popular for various online activities, especially when sharing links on platforms with limited space or when dealing with complex URLs.
                </div>
            </div>
        </React.Fragment>
    )
}
