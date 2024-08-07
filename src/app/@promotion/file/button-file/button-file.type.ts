type ColorType = "success" | "warning" | "danger";
type StatusButtonType = "uploaded" | "can-not-upload" | "can-upload";
export const buttons: Record<StatusButtonType, { color: ColorType; icon: string }> = {
  uploaded: {
    color: "success",
    icon: "done-all-outline",
  },
  "can-not-upload": {
    color: "danger",
    icon: "close-outline",
  },
  "can-upload": {
    color: "warning",
    icon: "edit-outline",
  },
};