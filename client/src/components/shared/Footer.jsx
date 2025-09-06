export default function Footer({ variant = "copyright" }) {
  const year = new Date().getFullYear();

  if (variant === "copyright") {
    return (
      <div className="bg-gray-200 py-6">
        <p className="text-xs md:text-sm text-center text-gray-600">
          &copy; {year} Team CampusBallot. All rights reserved.
        </p>
      </div>
    );
  }

  return (
    <p className="mt-6 text-sm text-gray-500 text-center">
      Need help? Contact the IT office — it@school.edu.ph
    </p>
  );
}
