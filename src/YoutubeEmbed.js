import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
    <div class="flex flex-col items-center w-4/5 lg:w-1/2 md:w-3/5 mx-auto">
        
        <div
            class="relative h-0 overflow-hidden max-w-full w-full"
            style={{ paddingBottom: "56.25%" }}
            >
            <iframe
                src={`https://www.youtube.com/embed/${embedId}`} frameborder="0"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
    </div>
);

YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;
