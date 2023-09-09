import React from 'react';

interface InvoiceProps {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  billTo: {
    name: string;
    address: string;
  };
  items: {
    name: string;
    quantity: number;
    rate: number;
  }[];
  subtotal: number;
  total: number;
  tax: number;
  
}

const Invoice: React.FC<InvoiceProps> = ({
  invoiceNumber,
  invoiceDate,
  dueDate,
  billTo,
  items,
  subtotal,
  total,
  tax,
  
}) => {
  return (
    <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10">
      {/* Invoice */}
      <div className="sm:w-11/12 lg:w-3/4 mx-auto">
        {/* Card */}
        <div className="flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
          {/* Grid */}
          <div className="flex justify-between">
            <div>
              <svg
                className="w-10 h-10"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Path Here */}
              </svg>

              <h1 className="mt-2 text-lg md:text-xl font-semibold text-blue-600 dark:text-white">SANROCK ENTERPRISE</h1>
            </div>
            {/* Col */}
            <div className="text-right">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">Invoice #</h2>
              <span className="mt-1 block text-gray-500">{invoiceNumber}</span>

              <address className="mt-4 not-italic text-gray-800 dark:text-gray-200">
                Wakwella , Sri Lanka
              </address>
            </div>
            {/* Col */}
          </div>
          {/* End Grid */}
          {/* Grid */}
          <div className="mt-8 grid sm:grid-cols-2 gap-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Bill to:</h3>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{billTo.name}</h3>
              <address className="mt-2 not-italic text-gray-500">{billTo.address}</address>
            </div>
            {/* Col */}
            <div className="sm:text-right space-y-2">
              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Invoice date:</dt>
                  <dd className="col-span-2 text-gray-500">{invoiceDate}</dd>
                </dl>
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Due date:</dt>
                  <dd className="col-span-2 text-gray-500">{dueDate}</dd>
                </dl>
              </div>
              {/* End Grid */}
            </div>
            {/* Col */}
          </div>
          {/* End Grid */}
          {/* Table */}
          <div className="mt-6">
            <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
              <div className="hidden sm:grid sm:grid-cols-5">
                <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">Item</div>
                <div className="text-left text-xs font-medium text-gray-500 uppercase">Qty</div>
                <div className="text-left text-xs font-medium text-gray-500 uppercase">Rate</div>
                <div className="text-right text-xs font-medium text-gray-500 uppercase">Amount</div>
              </div>
              <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>
              {items.map((item, index) => (
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2" key={index}>
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Item</h5>
                    <p className="font-medium text-gray-800 dark:text-gray-200">{item.name}</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Qty</h5>
                    <p className="text-gray-800 dark:text-gray-200">{item.quantity}</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Rate</h5>
                    <p className="text-gray-800 dark:text-gray-200">{item.rate}</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">Amount</h5>
                    <p className="sm:text-right text-gray-800 dark:text-gray-200">{item.quantity * item.rate}</p>
                  </div>
                </div>
              ))}
              <div className="sm:hidden border-b border-gray-200 dark:border-gray-700"></div>
            </div>
          </div>
          {/* End Table */}
          {/* Flex */}
          <div className="mt-8 flex sm:justify-end">
            <div className="w-full max-w-2xl sm:text-right space-y-2">
              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Subtotal:</dt>
                  <dd className="col-span-2 text-gray-500">${subtotal.toFixed(2)}</dd>
                </dl>
                
                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Tax:</dt>
                  <dd className="col-span-2 text-gray-500">${tax.toFixed(2)}</dd>
                </dl>

                <dl className="grid sm:grid-cols-5 gap-x-3">
                  <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">Total:</dt>
                  <dd className="col-span-2 text-gray-500">${total.toFixed(2)}</dd>
                </dl>

              </div>
              {/* End Grid */}
            </div>
          </div>
          {/* End Flex */}
          <div className="mt-8 sm:mt-12">
            <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Thank you!</h4>
            <p className="text-gray-500">If you have any questions concerning this invoice, use the following contact information:</p>
            <div className="mt-2">
              <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">sanrock@site.com</p>
              <p className="block text-sm font-medium text-gray-800 dark:text-gray-200">+1 (062) 109-9222</p>
            </div>
          </div>
          <p className="mt-5 text-sm text-gray-500">© 2022 Sanrock</p>
        </div>
        {/* End Card */}
        {/* Buttons */}
        <div className="mt-6 flex justify-end gap-x-3">
          <a
            className="inline-flex justify-center items-center gap-x-3 text-sm text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {/* SVG Path Here */}
            </svg>
            PDF
          </a>
          <a
            className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            href="#"
          >
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              {/* SVG Path Here */}
            </svg>
            Print details
          </a>
        </div>
        {/* End Buttons */}
      </div>
    </div>
  );
};

export default Invoice;
