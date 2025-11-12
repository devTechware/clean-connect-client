import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const MyContributions = () => {
  const { user } = useContext(AuthContext);
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchContributions = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/my-contributions?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${user.accessToken}`,
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch contributions");
        const data = await res.json();
        setContributions(data);
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Error Loading Data",
          text: "Could not load your contributions. Please try again later.",
        });
      }
    };

    fetchContributions();
  }, [user]);

  // Download PDF report
  const handleDownloadReport = (item) => {
    const doc = new jsPDF();

    // Header
    doc.setFontSize(18);
    doc.setTextColor(22, 107, 181);
    doc.text("Clean Connect - Contribution Report", 14, 20);

    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 30);
    doc.text(`Contributor: ${user.displayName || "Anonymous User"}`, 14, 38);
    doc.text(`Email: ${user.email}`, 14, 46);

    // Table content
    const tableData = [
      ["Issue Title", item.issueTitle],
      ["Category", item.category],
      ["Paid Amount (৳)", item.amount],
      ["Date", new Date(item.date).toLocaleDateString()],
    ];

    autoTable(doc, {
      startY: 60,
      head: [["Field", "Details"]],
      body: tableData,
      theme: "grid",
      headStyles: { fillColor: [22, 107, 181], textColor: 255 },
      alternateRowStyles: { fillColor: [245, 247, 249] },
    });

    // Footer
    const pageHeight = doc.internal.pageSize.height;
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text(
      "Thank you for contributing to community cleanliness",
      14,
      pageHeight - 20
    );
    doc.text("Clean Connect", 14, pageHeight - 14);

    doc.save(`${item.title}-report.pdf`);
  };

  return (
    <>
      <title>My Contributions</title>
      <div className="min-h-screen bg-base-200 py-12 px-6 my-4 rounded-xl shadow">
        <div className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-6 text-center">
            My Cleanup Contributions
          </h1>

          {contributions.length === 0 ? (
            <p className="text-center text-gray-500 py-10">
              You haven’t made any cleanup contributions yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="table w-full border border-base-300 rounded-lg">
                <thead className="bg-base-300 text-primary">
                  <tr>
                    <th>#</th>
                    <th>Issue Title</th>
                    <th>Category</th>
                    <th>Paid Amount (৳)</th>
                    <th>Date</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {contributions.map((item, index) => (
                    <tr
                      key={item._id}
                      className="hover:bg-base-200 transition-all"
                    >
                      <td>{index + 1}</td>
                      <td className="font-semibold">{item.title}</td>
                      <td className="text-secondary capitalize">
                        {item.category}
                      </td>
                      <td className="font-semibold text-accent">
                        {item.amount}
                      </td>
                      <td>{new Date(item.date).toLocaleDateString()}</td>
                      <td className="text-center">
                        <button
                          onClick={() => handleDownloadReport(item)}
                          className="btn btn-sm bg-primary hover:bg-secondary text-white"
                        >
                          Download Report
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyContributions;
