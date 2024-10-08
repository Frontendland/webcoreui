/* eslint-disable max-len */
import React from 'react'

import {
    Card,
    Timeline,
    TimelineItem
} from 'webcoreui/react'

const TimelineExample = () => {

    return (
        <Card>
            <Timeline theme="fill">
                <TimelineItem title="2020">
                    <strong>Founded</strong>
                    <br />
                    <span className="muted">
                        Launched our mission to transform online shopping with a handpicked selection of goods and a commitment to unparalleled customer care.
                    </span>
                </TimelineItem>
                <TimelineItem title="2021">
                    <strong>Expanded Offerings</strong>
                    <br />
                    <span className="muted">
                        Introduced over 500 unique, locally-sourced products, enriching our collection and supporting small businesses.
                    </span>
                </TimelineItem>
                <TimelineItem title="2022">
                    <strong>⭐ Achieved Milestone</strong>
                    <br />
                    <span className="muted">
                        Proudly served 100,000 happy customers, marked by launching same-day delivery in major cities and exclusive membership perks.
                    </span>
                </TimelineItem>
            </Timeline>
        </Card>
    )
}

export default TimelineExample
