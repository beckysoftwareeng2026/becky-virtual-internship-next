export default function LoadingBookPage() {
  return (
    <div className="dashboard">
      <div className="sidebar"></div>

      <main className="dashboard__main">
        <div className="dashboard__content">
          <div className="skeleton skeleton-title"></div>
          <div className="skeleton skeleton-text"></div>
          <div className="skeleton skeleton-text short"></div>
          <div className="skeleton skeleton-box"></div>
        </div>
      </main>
    </div>
  );
}