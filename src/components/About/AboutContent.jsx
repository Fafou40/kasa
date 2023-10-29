import React from 'react';
import Collapse from "../Layout/Collapse";
import { aboutBlocks } from '../../datas/about';

const AboutContent = () => {
    return(
        <section className="about_collapses">
            {
                aboutBlocks.map((block) => (
                    <div key={block.title} className="about_collapses_content">
                        <Collapse
                            title={block.title}
                            content={block.content}
                        />
                    </div>
                ))
            }
        </section>
    )
}

export default AboutContent;