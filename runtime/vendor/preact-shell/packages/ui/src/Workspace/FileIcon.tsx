import { useEffect } from "preact/hooks";
import { Icon } from "../Icon";
import { createLazySignal } from "../hooks";
import { getFileIconName } from "./file-type-map";

const setiSignal = createLazySignal(() => import("./seti-icons"));

interface FileIconProps {
  filename: string;
  isFolder?: boolean;
  open?: boolean;
  size?: number;
}

export function FileIcon({ filename, isFolder = false, open = false, size = 16 }: FileIconProps) {
  const setiState = setiSignal.state.value;

  useEffect(() => {
    if (!isFolder) {
      setiSignal.load();
    }
  }, [isFolder]);

  if (isFolder) {
    return <Icon name={open ? "folder-opened" : "folder"} size={size - 4} />;
  }

  if (setiState.status !== "ready") {
    return <Icon name="file" size={size - 4} />;
  }

  const iconName = getFileIconName(filename);
  const icon = setiState.module.SETI_ICONS[iconName] || setiState.module.SETI_ICONS.default;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill={icon.color}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: icon.path }}
    />
  );
}
