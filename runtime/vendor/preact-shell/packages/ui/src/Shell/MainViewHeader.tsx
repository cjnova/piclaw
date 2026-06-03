import { Icon } from "../Icon";

interface MainViewHeaderProps {
  title: string;
  onClose: () => void;
}

export function MainViewHeader({ title, onClose }: MainViewHeaderProps) {
  return (
    <header className="main-view__header">
      <span className="main-view__title">{title}</span>
      <button
        type="button"
        className="main-view__close"
        aria-label={`Close ${title}`}
        onClick={onClose}
      >
        <Icon name="close" size={16} />
      </button>
    </header>
  );
}
