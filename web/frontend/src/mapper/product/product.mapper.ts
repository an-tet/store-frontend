import { ProductEntity } from '../../models/product/product.entity';
import { ProductModel } from '../../models/product/product.model';
import { SupplierModel } from '../../models/supplier/supplier.model';

export class ProductMapper {
  static readonly toEntity = (
    data: ProductModel,
    supplierList: SupplierModel[]
  ): ProductEntity => {
    return {
      id: data.id,
      name: data.name,
      detail: data.detail,
      price: data.price,
      stock: data.stock,
      status: data.status,
      supplier_id: this.supplierToModelShape(supplierList, data.supplier),
    };
  };
  static readonly toModel = (
    entity: ProductEntity,
    supplierList: SupplierModel[]
  ): ProductModel => {
    return {
      id: entity.id,
      name: entity.name,
      detail: entity.detail,
      price: entity.price,
      stock: entity.stock,
      status: entity.status,
      supplier: this.supplierToEntityShape(supplierList, entity.supplier_id),
    };
  };

  static readonly arrayToModel = (
    entities: ProductEntity[],
    supplierList: SupplierModel[]
  ): ProductModel[] => {
    return entities.map((entity) => ({
      id: entity.id,
      name: entity.name,
      detail: entity.detail,
      price: entity.price,
      stock: entity.stock,
      status: entity.status,
      supplier: this.supplierToEntityShape(supplierList, entity.supplier_id),
    }));
  };

  private static supplierToEntityShape = (
    supplierList: SupplierModel[],
    supplier_id: number
  ): string => {
    return (
      supplierList.find((supplier) => supplier.id === supplier_id)?.name ?? 'a'
    );
  };

  private static supplierToModelShape = (
    supplierList: SupplierModel[],
    supplierName: string
  ): number => {
    return (
      supplierList.find((supplier: SupplierModel) =>
        this.checkSupplierName(supplier.name, supplierName)
      )?.id ?? -1
    );
  };

  private static checkSupplierName = (
    supplierName: string,
    supplierNameSearch: string
  ) => {
    return supplierName === supplierNameSearch;
  };
}
