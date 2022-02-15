import {
    EmailIcon,
    EmailShareButton,
    FacebookShareButton,
    FacebookIcon,
    TelegramShareButton,
    TelegramIcon,
    TwitterShareButton,
    TwitterIcon,
    WhatsappShareButton,
    WhatsappIcon
} from "react-share";
import styled from "styled-components";


const DivShare = styled.div`
padding-right:10px;
display:flex;
`;

const DivShareInner = styled.div`
display:inline-block;
padding-right:10px;
`;

const ShareRecipe = () => {
    return (
        <>
            <DivShare>
                <DivShareInner>
                    <EmailShareButton subject="New Recipe To Try" url={"https://test.com/test1/"}>
                        <EmailIcon round size={36} ></EmailIcon>
                    </EmailShareButton>
                </DivShareInner>
                <DivShareInner>
                    <TwitterShareButton
                        title={"test"}
                        url={"https://test.com/test1/"}
                        hashtags={["hashtag1", "hashtag2"]}>
                        <TwitterIcon size={36} round />
                    </TwitterShareButton>
                </DivShareInner>
                <DivShareInner>
                    <TelegramShareButton
                        title={"test"}
                        url={"https://test.com/test1/"}
                        hashtags={["hashtag1", "hashtag2"]}>
                        <TelegramIcon size={36} round />
                    </TelegramShareButton>
                </DivShareInner>
                <DivShareInner>
                    <FacebookShareButton
                        title={"test"}
                        url={"https://test.com/test1/"}
                        hashtags={["hashtag1", "hashtag2"]}>
                        <FacebookIcon size={36} round />
                    </FacebookShareButton>
                </DivShareInner>
                <DivShareInner>
                    <WhatsappShareButton
                        title={"test"}
                        url={"https://test.com/test1/"}
                        hashtags={["hashtag1", "hashtag2"]}>
                        <WhatsappIcon size={36} round />
                    </WhatsappShareButton>
                </DivShareInner>

            </DivShare>
        </>
    )
}

export default ShareRecipe;