import { StyleColors } from "globalStyles/colors";
import { ReturnStatus } from "../../../types/guideTypes";

export const calculateReturnStyle = (returnStatus: ReturnStatus) => {
  if (returnStatus === ReturnStatus.PASSED) {
    return StyleColors.green;
  }
  if (returnStatus === ReturnStatus.HALL_OF_FAME) {
    return StyleColors.purple;
  }
  if (returnStatus === ReturnStatus.FAILED) {
    return StyleColors.red;
  }
  return StyleColors.lightGrey;
};
