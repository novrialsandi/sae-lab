"use client";

import React, { useState, useEffect } from "react";
import {
	Globe,
	Users,
	Award,
	Clock,
	Mail,
	Phone,
	MapPin,
	Star,
	ChevronDown,
	Menu,
	X,
	ArrowRight,
} from "lucide-react";

const HomeComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	const services = [
		{
			title: "Penerjemahan Dokumen",
			description:
				"Layanan penerjemahan dokumen resmi, kontrak, sertifikat, dan dokumen bisnis lainnya dengan akurasi tinggi.",
			icon: "📄",
		},
		{
			title: "Penerjemahan Tersumpah",
			description:
				"Penerjemahan resmi yang disahkan untuk keperluan legal, imigrasi, dan dokumen pemerintahan.",
			icon: "⚖️",
		},
		{
			title: "Interpreter Services",
			description:
				"Layanan interpreter untuk meeting, konferensi, dan acara bisnis internasional.",
			icon: "🎤",
		},
		{
			title: "Website & Software",
			description:
				"Lokalisasi website, aplikasi mobile, dan software untuk pasar internasional.",
			icon: "💻",
		},
		{
			title: "Content Translation",
			description:
				"Penerjemahan konten marketing, artikel, dan materi promosi dengan tone yang tepat.",
			icon: "✍️",
		},
		{
			title: "Technical Translation",
			description:
				"Penerjemahan dokumen teknis, manual, dan spesifikasi industri khusus.",
			icon: "🔧",
		},
	];

	const languages = [
		{ name: "English", flag: "🇺🇸" },
		{ name: "Mandarin", flag: "🇨🇳" },
		{ name: "Japanese", flag: "🇯🇵" },
		{ name: "Korean", flag: "🇰🇷" },
		{ name: "Arabic", flag: "🇸🇦" },
		{ name: "German", flag: "🇩🇪" },
		{ name: "French", flag: "🇫🇷" },
		{ name: "Spanish", flag: "🇪🇸" },
		{ name: "Italian", flag: "🇮🇹" },
		{ name: "Dutch", flag: "🇳🇱" },
		{ name: "Russian", flag: "🇷🇺" },
		{ name: "Portuguese", flag: "🇵🇹" },
	];

	const testimonials = [
		{
			name: "Sarah Johnson",
			company: "Global Tech Solutions",
			text: "LinguaLink memberikan layanan penerjemahan yang sangat profesional. Kualitas terjemahan sangat akurat dan tepat waktu.",
			rating: 5,
		},
		{
			name: "Ahmad Wijaya",
			company: "PT Maju Bersama",
			text: "Tim penerjemah tersumpah mereka sangat membantu dalam proses legalisasi dokumen ekspor impor kami.",
			rating: 5,
		},
		{
			name: "Maria Santos",
			company: "International Marketing Corp",
			text: "Lokalisasi website kami ke 8 bahasa berjalan sangat lancar. Hasil terjemahan sangat natural dan sesuai kultur lokal.",
			rating: 5,
		},
	];

	const stats = [
		{ number: "1000+", label: "Klien Puas" },
		{ number: "50+", label: "Bahasa Tersedia" },
		{ number: "24/7", label: "Layanan Support" },
		{ number: "99%", label: "Tingkat Akurasi" },
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-white">
			<nav className="fixed w-full top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<div className="flex items-center space-x-2">
							<Globe className="h-8 w-8 text-blue-600" />
							<span className="text-2xl font-bold text-gray-900">
								LinguaLink
							</span>
						</div>

						<div className="hidden md:flex items-center space-x-8">
							<a
								href="#home"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Beranda
							</a>
							<a
								href="#services"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Layanan
							</a>
							<a
								href="#about"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Tentang
							</a>
							<a
								href="#contact"
								className="text-gray-700 hover:text-blue-600 transition-colors"
							>
								Kontak
							</a>
							<button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
								Konsultasi Gratis
							</button>
						</div>

						<button
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? (
								<X className="h-6 w-6" />
							) : (
								<Menu className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden bg-white border-t">
						<div className="px-4 py-4 space-y-4">
							<a href="#home" className="block text-gray-700">
								Beranda
							</a>
							<a href="#services" className="block text-gray-700">
								Layanan
							</a>
							<a href="#about" className="block text-gray-700">
								Tentang
							</a>
							<a href="#contact" className="block text-gray-700">
								Kontak
							</a>
							<button className="w-full bg-blue-600 text-white py-2 rounded-full">
								Konsultasi Gratis
							</button>
						</div>
					</div>
				)}
			</nav>

			{/* Hero Section */}
			<section
				id="home"
				className="pt-20 bg-gradient-to-br from-blue-50 via-white to-purple-50"
			>
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-8">
							<div className="space-y-4">
								<h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
									Jembatan
									<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
										{" "}
										Komunikasi
									</span>
									<br />
									Global Anda
								</h1>
								<p className="text-xl text-gray-600 leading-relaxed">
									Layanan penerjemahan profesional untuk menghubungkan bisnis
									Anda dengan pasar internasional. Akurat, cepat, dan
									terpercaya.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4">
								<button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
									Mulai Proyek Anda
									<ArrowRight className="inline ml-2 h-5 w-5" />
								</button>
								<button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors">
									Lihat Portfolio
								</button>
							</div>

							<div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
								{stats.map((stat, index) => (
									<div key={index} className="text-center">
										<div className="text-3xl font-bold text-blue-600">
											{stat.number}
										</div>
										<div className="text-sm text-gray-600">{stat.label}</div>
									</div>
								))}
							</div>
						</div>

						<div className="relative">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Ke Bahasa
								</label>
								<select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>English</option>
									<option>Bahasa Indonesia</option>
									<option>Mandarin</option>
								</select>
							</div>{" "}
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Ke Bahasa
								</label>
								<select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
									<option>English</option>
									<option>Bahasa Indonesia</option>
									<option>Mandarin</option>
								</select>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section id="services" className="py-20 bg-gray-50">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Layanan Profesional Kami
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Kami menyediakan berbagai layanan penerjemahan yang disesuaikan
							dengan kebutuhan bisnis dan personal Anda
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<div
								key={index}
								className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
							>
								<div className="text-4xl mb-4">{service.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
									{service.title}
								</h3>
								<p className="text-gray-600 leading-relaxed mb-6">
									{service.description}
								</p>
								<button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
									Pelajari Lebih Lanjut →
								</button>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Languages Section */}
			<section className="py-20 bg-white">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Bahasa Yang Kami Layani
						</h2>
						<p className="text-xl text-gray-600">
							Lebih dari 50 bahasa siap melayani kebutuhan global Anda
						</p>
					</div>

					<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
						{languages.map((language, index) => (
							<div
								key={index}
								className="text-center p-4 rounded-lg hover:bg-blue-50 transition-colors group cursor-pointer"
							>
								<div className="text-4xl mb-2 group-hover:scale-110 transition-transform">
									{language.flag}
								</div>
								<div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
									{language.name}
								</div>
							</div>
						))}
					</div>

					<div className="text-center mt-12">
						<p className="text-gray-600 mb-4">
							Tidak menemukan bahasa yang Anda cari?
						</p>
						<button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
							Hubungi Kami
						</button>
					</div>
				</div>
			</section>

			<section
				id="about"
				className="py-20 bg-gradient-to-r from-blue-50 to-purple-50"
			>
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid lg:grid-cols-2 gap-16 items-center">
						<div className="space-y-8">
							<div>
								<h2 className="text-4xl font-bold text-gray-900 mb-6">
									Mengapa Memilih LinguaLink?
								</h2>
								<p className="text-xl text-gray-600 leading-relaxed">
									Dengan pengalaman lebih dari 10 tahun, kami telah membantu
									ribuan klien mencapai target internasional mereka melalui
									komunikasi yang efektif.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="bg-blue-100 p-2 rounded-lg">
										<Award className="h-6 w-6 text-blue-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Sertifikasi Internasional
										</h3>
										<p className="text-gray-600">
											Tim penerjemah bersertifikat dengan standar ISO 17100
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-green-100 p-2 rounded-lg">
										<Clock className="h-6 w-6 text-green-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Pengerjaan Cepat
										</h3>
										<p className="text-gray-600">
											Proses pengerjaan yang efisien tanpa mengurangi kualitas
										</p>
									</div>
								</div>

								<div className="flex items-start space-x-4">
									<div className="bg-purple-100 p-2 rounded-lg">
										<Users className="h-6 w-6 text-purple-600" />
									</div>
									<div>
										<h3 className="text-lg font-semibold text-gray-900 mb-2">
											Tim Berpengalaman
										</h3>
										<p className="text-gray-600">
											Penerjemah native speaker dengan keahlian khusus di
											berbagai industri
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
								<div className="p-8">
									<h3 className="text-2xl font-bold text-gray-900 mb-6">
										Testimoni Klien
									</h3>
									<div className="space-y-6">
										<div className="bg-gray-50 rounded-lg p-6">
											<div className="flex items-center mb-4">
												{[...Array(testimonials[activeTestimonial].rating)].map(
													(_, i) => (
														<Star
															key={i}
															className="h-5 w-5 text-yellow-400 fill-current"
														/>
													)
												)}
											</div>
											<p className="text-gray-700 mb-4 italic">
												"{testimonials[activeTestimonial].text}"
											</p>
											<div>
												<div className="font-semibold text-gray-900">
													{testimonials[activeTestimonial].name}
												</div>
												<div className="text-sm text-gray-600">
													{testimonials[activeTestimonial].company}
												</div>
											</div>
										</div>
									</div>

									<div className="flex justify-center space-x-2 mt-6">
										{testimonials.map((_, index) => (
											<button
												key={index}
												className={`w-3 h-3 rounded-full transition-colors ${
													index === activeTestimonial
														? "bg-blue-600"
														: "bg-gray-300"
												}`}
												onClick={() => setActiveTestimonial(index)}
											/>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-900 text-white">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-4xl font-bold mb-4">
							Siap Memulai Proyek Anda?
						</h2>
						<p className="text-xl text-gray-300">
							Hubungi tim ahli kami untuk konsultasi gratis dan dapatkan solusi
							terbaik
						</p>
					</div>

					<div className="grid lg:grid-cols-3 gap-12">
						<div className="lg:col-span-2">
							<div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
								<div className="grid md:grid-cols-2 gap-6">
									<div>
										<label className="block text-sm font-medium mb-2">
											Nama Lengkap
										</label>
										<input
											type="text"
											className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="Masukkan nama Anda"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium mb-2">
											Email
										</label>
										<input
											type="email"
											className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
											placeholder="nama@email.com"
										/>
									</div>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Subjek
									</label>
									<input
										type="text"
										className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
										placeholder="Layanan yang dibutuhkan"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-2">
										Pesan
									</label>
									<textarea
										rows="5"
										className="w-full p-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
										placeholder="Ceritakan tentang proyek Anda..."
									></textarea>
								</div>
								<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105">
									Kirim Pesan
								</button>
							</div>
						</div>

						<div className="space-y-8">
							<div>
								<h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
								<div className="space-y-4">
									<div className="flex items-center space-x-4">
										<div className="bg-blue-600 p-3 rounded-lg">
											<Phone className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">Telepon</div>
											<div className="text-gray-300">+62 21 1234 5678</div>
										</div>
									</div>

									<div className="flex items-center space-x-4">
										<div className="bg-blue-600 p-3 rounded-lg">
											<Mail className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">Email</div>
											<div className="text-gray-300">info@lingualink.com</div>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-blue-600 p-3 rounded-lg">
											<MapPin className="h-6 w-6" />
										</div>
										<div>
											<div className="font-medium">Alamat</div>
											<div className="text-gray-300">
												Jl. Sudirman No. 123
												<br />
												Jakarta Pusat 10220
												<br />
												Indonesia
											</div>
										</div>
									</div>
								</div>
							</div>

							<div>
								<h4 className="text-lg font-semibold mb-4">Jam Operasional</h4>
								<div className="space-y-2 text-gray-300">
									<div className="flex justify-between">
										<span>Senin - Jumat</span>
										<span>08:00 - 18:00</span>
									</div>
									<div className="flex justify-between">
										<span>Sabtu</span>
										<span>09:00 - 15:00</span>
									</div>
									<div className="flex justify-between">
										<span>Minggu</span>
										<span>Tutup</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-black text-white py-12">
				<div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid md:grid-cols-4 gap-8">
						<div className="md:col-span-2">
							<div className="flex items-center space-x-2 mb-4">
								<Globe className="h-8 w-8 text-blue-400" />
								<span className="text-2xl font-bold">LinguaLink</span>
							</div>
							<p className="text-gray-400 mb-6 max-w-md">
								Menghubungkan dunia melalui komunikasi yang efektif. Partner
								terpercaya untuk kebutuhan penerjemahan profesional Anda.
							</p>
							<div className="flex space-x-4">
								<button className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition-colors">
									<span className="sr-only">Facebook</span>
									📘
								</button>
								<button className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg transition-colors">
									<span className="sr-only">Twitter</span>
									🐦
								</button>
								<button className="bg-blue-700 hover:bg-blue-800 p-2 rounded-lg transition-colors">
									<span className="sr-only">LinkedIn</span>
									💼
								</button>
							</div>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-4">Layanan</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Penerjemahan Dokumen
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Penerjemahan Tersumpah
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Interpreter Services
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Website Translation
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
							<ul className="space-y-2 text-gray-400">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Tentang Kami
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Tim
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Karir
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Blog
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
						<p>&copy; 2024 LinguaLink. Semua hak dilindungi undang-undang.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default HomeComponent;
