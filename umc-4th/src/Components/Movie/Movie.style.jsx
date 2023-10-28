import styled from "styled-components"

const ModalWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: none;
    position: absolute;
    overflow: auto;
`;

const Poster = styled.div`
    background-color: rgb(76, 76, 126);
    margin: 10px;
    width: 150px;
    height: 260px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border-radius: 3px;
    position: relative;
    &:hover {
        ${ModalWrap}{
            display: flex;
        }
    }
`; 
const ModalForm = styled.div` 
    width: 85%;
    height: 80%;
    font-size: 10px;
    text-align: justify;
`; 
const ModalTitle = styled.div`
    margin-bottom: 20%;
`; 
const Img = styled.img`
    width: 100%;
    height: 75%;
`;
const Text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 25%;
    color: white;
    font-size: 10px;
    font-weight: 700;
`;
const Average = styled.div`
    margin-left: auto;
`;
function MovieStyle(props) {
    const PosterUrl = `https://image.tmdb.org/t/p/w1280/${props.item.poster_path}`;
    return (
        <Poster>
            <ModalWrap>
                <ModalForm>
                    <ModalTitle>{props.item.title}</ModalTitle>
                    <div>{props.item.overview}</div>
                </ModalForm>
            </ModalWrap>
            <Img src={PosterUrl} alt="poster"></Img>
            <Text>
                <div>{props.item.title}</div>
                <Average>{props.item.vote_average}</Average>
            </Text>
        </Poster>
    );
}

export default MovieStyle;
