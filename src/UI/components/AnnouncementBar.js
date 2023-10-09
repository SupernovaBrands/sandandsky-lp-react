const AnnouncementBar = () => {
	return (
		<div id="announcementBar" className="announcement-bar bg-primary carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
			<div className="carousel-inner container x1">
				<div className="carousel-item text-center text-white active">
					<a href="https://www.amazon.com/sandandsky?maas=maas_adg_8EA37C43F6AD95DB249DE08F65E1DCAA_afap_abs&ref_=aa_maas&tag=maas" className="d-flex align-items-center justify-content-center font-size-sm">Prime Big Deal Days: Up to 30% off!</a>
				</div>
			</div>
		</div>
	);
};

export default AnnouncementBar;
