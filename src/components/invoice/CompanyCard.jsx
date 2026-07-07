export default function CompanyCard() {
  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="text-xl font-semibold mb-6">
        Company Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-gray-500">
            Company
          </p>

          <p className="font-semibold">
            TaxFlow Technologies Pvt Ltd
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            GSTIN
          </p>

          <p>
            07AAACT1234A1Z5
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Phone
          </p>

          <p>
            +91 9876543210
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Email
          </p>

          <p>
            support@taxflow.com
          </p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">
            Address
          </p>

          <p>
            Connaught Place, New Delhi, India
          </p>
        </div>

      </div>

    </div>
  );
}