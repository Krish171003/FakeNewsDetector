const axios = require("axios");

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

async function checkFactWithGoogle(query) {
    const url = `https://factchecktools.googleapis.com/v1alpha1/claims:search?query=${encodeURIComponent(query)}&key=${GOOGLE_API_KEY}`;

    try {
        const response = await axios.get(url);
        const claims = response.data.claims || [];

        if (claims.length === 0) {
            return null; // No result found
        }

        const firstClaim = claims[0];
        const text = firstClaim.text;
        const claimant = firstClaim.claimant;
        const claimReview = firstClaim.claimReview?.[0];
        const result = claimReview?.text || "No conclusion";

        return {
            text,
            claimant,
            result,
            source: claimReview?.publisher?.name || "Unknown Source"
        };
    } catch (error) {
        console.error("Google Fact Check API error:", error.message);
        return null;
    }
}

module.exports = checkFactWithGoogle;
