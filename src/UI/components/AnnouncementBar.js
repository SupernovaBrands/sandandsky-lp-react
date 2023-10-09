const AnnouncementBar = () => {
	return (
		<div id="announcementBar" className="announcement-bar bg-primary carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
			<div className="carousel-inner container">
				<div className="carousel-item text-center text-white active">
					<a href="/" className="d-flex align-items-center justify-content-center font-size-sm">Prime Big Deal Days: Up to 30% off!</a>
				</div>
			</div>
		</div>
	);
};

export default AnnouncementBar;
