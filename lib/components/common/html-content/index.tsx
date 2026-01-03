"use client";
import React from "react";

interface HtmlContentProps {
    html: string;
    maxContent?: number; // max number of characters
    className?: string;
}

/**
 * Truncate HTML string while preserving tags.
 */
function truncateHtml(html: string, maxLength: number) {
    let result = "";
    let charCount = 0;
    const tagStack: string[] = [];

    const regex = /(<[^>]+>)|([^<]+)/g; // matches tags or text
    let match;

    while ((match = regex.exec(html)) !== null) {
        const [fullMatch, tag, text] = match;

        if (tag) {
            // opening or closing tag
            result += tag;

            if (!tag.startsWith("</") && !tag.endsWith("/>")) {
                // opening tag
                const tagNameMatch = tag.match(/^<(\w+)/);
                if (tagNameMatch) tagStack.push(tagNameMatch[1]);
            } else if (tag.startsWith("</")) {
                // closing tag
                tagStack.pop();
            }
        } else if (text) {
            if (charCount + text.length > maxLength) {
                const remaining = maxLength - charCount;
                result += text.slice(0, remaining) + "...";
                break;
            } else {
                result += text;
                charCount += text.length;
            }
        }
    }

    // close any remaining open tags
    while (tagStack.length) {
        const tag = tagStack.pop();
        if (tag) result += `</${tag}>`;
    }

    return result;
}

const HtmlContent: React.FC<HtmlContentProps> = ({ html, maxContent, className }) => {
    const displayedHtml = maxContent ? truncateHtml(html, maxContent) : html;

    return <div className={`text-justify ${className}`} dangerouslySetInnerHTML={{ __html: displayedHtml }} />;
};

export default HtmlContent;
