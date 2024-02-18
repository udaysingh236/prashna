import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import ScoreCard from './ScoreCard';
import { FaDownload } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import downloadjs from 'downloadjs';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SCORE_CARD_ID, routeNames } from '../../helpers/constant';
import { clearState } from './ScoreSlice';

function Score() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userName } = useAppSelector((state) => state.game);
  const downloadPdfDocument = (rootElementId: string) => {
    const input = document.getElementById(rootElementId);
    if (input) {
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        // const pdf = new jsPDF();
        // pdf.addImage(imgData, 'JPEG', 0, 0, 0, 0);
        // pdf.save(`${userName}-score-card.pdf`);
        downloadjs(imgData, `${userName}-score-card.png`, 'image/png');
      });
    }
  };
  return (
    <>
      <ScoreCard />
      <div className="mt-6 flex items-center justify-between gap-4 px-4 ">
        <Button
          type="Primary"
          isSubmit={false}
          onClick={() => {
            downloadPdfDocument(SCORE_CARD_ID);
          }}
        >
          <span>Download</span> <FaDownload />
        </Button>
        <Button
          type="Primary"
          isSubmit={false}
          onClick={() => {
            dispatch(clearState());
            navigate(routeNames.home);
          }}
        >
          <span>Home</span>
        </Button>
      </div>
    </>
  );
}

export default Score;
